
from django.contrib.auth.models import User
from django.urls import include, path
from rest_framework import (generics, mixins, permissions, routers,
                            serializers, status, viewsets)
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializers import *

# ViewSets define the view behavior.

class ChoicesViewSet(viewsets.ModelViewSet):
    serializer_class = ChoicesSerializer
    queryset = Choices.objects.all()

class AnswerViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerPolymorphicSerializer
    queryset = Answer.objects.all()

class QuestionsViewSet(viewsets.ModelViewSet):
    queryset = QuestionExercise.objects.all()
    serializer_class = QuestionExerciseSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExercisePolymorphicSerializer

class ExperimentViewSet(viewsets.ModelViewSet):
    queryset = Experiment.objects.all()
    serializer_class = ExperimentSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'choice', ChoicesViewSet)
router.register(r'answer', AnswerViewSet)
router.register(r'experiment', ExperimentViewSet)
router.register(r'qes', QuestionsViewSet)
router.register(r'exers', ExerciseViewSet)
router.register(r'evers', EventViewSet)
