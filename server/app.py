# FLASK_APP=app.py FLASK_DEBUG=1 flask run

from flask import Flask, request

from aaa import Aaa

app = Flask(__name__)


@app.route('/')
def index():
    return 'hello flask'


@app.route('/aaa', methods=["GET", "POST"])
def aaa():
    print(request.files)
    print(request.form)

    if(request.form['text'] == 'ggg'):
        return 'gggがきました'
    else:
        aaa = Aaa()
        return aaa.hello_method()

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")