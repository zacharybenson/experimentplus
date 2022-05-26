from django.contrib import admin
from .models import *

admin.site.register(Experiment)
admin.site.register(Event)
admin.site.register(Exercise)
admin.site.register(Choices)
admin.site.register(Questions)
admin.site.register(Answer)
admin.site.register(QuestionExercise)