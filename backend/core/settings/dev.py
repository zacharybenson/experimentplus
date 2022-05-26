"""
Configuration for development with Docker.
"""
import os

from core.settings.base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY', 'development')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["backend", "localhost", "127.0.0.1"]

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': os.environ.get('DB_NAME', 'postgres'),
#         'USER': os.environ.get('DB_USER', 'postgres'),
#         'PASSWORD': os.environ.get('DB_USER', 'postgres'),
#         'HOST': os.environ.get('DB_HOST', 'db'),
#         'PORT': os.environ.get('DB_PORT', 5432)
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'expdb',
        'USER': 'xp_api',
        'PASSWORD': 'PsK72XwM5m6ggFbfmvnNzo2up!LkfhTfvb$d1aM0RGEmfj9H41TlQ7etzCKQE$oAfj*ef1b9y2NNuCrqO6$2g27x8DE3O^w#mlt',
        'HOST': 'db',
        'PORT': '5432',
    }
    }