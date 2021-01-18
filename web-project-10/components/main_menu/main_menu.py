from flask import Blueprint, render_template

# Header blueprint definition
main_menu = Blueprint('Header', __name__, static_folder='static', static_url_path='/Header', template_folder='templates')
