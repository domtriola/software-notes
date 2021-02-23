# Setting Up a Basic Python Project

## Python Version Setup

* Install desired Python version: `pyenv install 3.9.1`
* Create a virtual environment: `pyenv virtualenv 3.9.1 envname-3.9.1`
* Activate automatically by adding virtualenv to `.python-version` in project (or by running `pyenv local`)
* Activate manually: `pyenv activate envname-3.9.1`

## Package Setup

* If requirements.txt exists already: `pip install -r requirements.txt`

### Adding new packages

* `pip install packagename`
* `pip freeze > requirements.txt`
