from flask import Flask,render_templates

app = Flask(__name__)

@app.route("/")
def skaitlu_sala():
    return render_template ("index.html")

if __name__ == "__main__":
    app.run(debug=True)