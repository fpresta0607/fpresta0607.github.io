from flask import Flask, render_template
app = Flask(__name__, static_folder='static')
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/projects')
def about():
    return render_template('projects.html')

if __name__ == '__main__':
    app.run(debug=True)