from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route('/form')
def lol():
    return render_template("form.html")

@app.route('/sort')
def sort():
    return render_template("sort.html")


if __name__ == "__main__":
    app.run(debug=True) 