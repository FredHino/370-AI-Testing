from http.server import BaseHTTPRequestHandler
from json import dumps, loads

from api.playlistMaker import playlistmaker
from api.track import Track

class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        request_body = loads(post_data)

        token = request_body.get('token')
        playlist_name = request_body.get('name')
        tracks_data = request_body.get('tracks')
        num_songs = request_body.get('numSongs')

        # Convert track data to Track objects
        tracks = [Track(data["name"], data["id"], data["artist"][0]) for data in tracks_data]

        pm = playlistmaker([token])

        # Create the playlist with the given name
        playlist = pm.create_playlist(playlist_name)

        # Populate the playlist with the selected tracks, limited to num_songs
        pm.populate_playlist(playlist, tracks[:num_songs])

        # Get the link to the playlist
        link = pm.get_playlist_link()

        response_data = {"external_url": link}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(dumps(response_data).encode())
        return