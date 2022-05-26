from django.db import models
from django.contrib.auth.models import User
from django.db.models import TextChoices
from polymorphic.models import PolymorphicModel
from django.utils.crypto import get_random_string

# -------------------- Abstract -------------------- #
class BaseModel(models.Model):
    title = models.CharField(max_length=200, default = "Title")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True

# -------------------- Polymorphic -------------------- #

# -------------------- Polymorphic Exercise -------------------- #

class Exercise(PolymorphicModel):
    instruction = models.CharField(max_length = 10000, default = " ")

# -------------------- Question Exercise -------------------- #

class Questions(models.Model):
    class questionType(models.TextChoices):
        N = 0 , "None"
        MC = 1 , "Multiple Choice"
        CB = 2, "Check Box"
        SA = 3 , "Short Answer"
        LA = 4 , "Long Answer"
        SLA = 5, "Slider"

    questionType = models.CharField(
        max_length = 2,
        choices = questionType.choices,
        default = questionType.N
        )

    question = models.CharField(max_length= 10000)
    required = models.BooleanField(default=False)

    def __str__(self):
        return self.question

class Choices(models.Model):
    choice = models.CharField(max_length=5000)
    choice_to = models.ForeignKey(Questions, on_delete = models.CASCADE, related_name = "choice_to", default="Null")

class QuestionExercise(Exercise):
    questions = models.ManyToManyField(Questions, related_name="questions")

# -------------------- Polymorphic Answers -------------------- #

class Answer(PolymorphicModel):
    answer_to = models.ForeignKey(Questions, on_delete = models.CASCADE, related_name = "answer_to")

class MCAnswer(Answer):
    MCA = models.ForeignKey(Choices, related_name='MCA',on_delete = models.CASCADE)
    
class CBAnswer(Answer):
    CBAs = models.ManyToManyField(Choices,related_name='CBA')

class SAnswer(Answer):
    SA = models.CharField(max_length = 20, default = "0")

class LAnswer(Answer):
    LA = models.CharField(max_length = 10000, default = "0")

class SliderAnswer(Answer):
    SLA = models.IntegerField()

 # -------------------- Polymorphic Response -------------------- #   
class ExerciseResponses(PolymorphicModel):
    response_to = models.ForeignKey(Exercise, on_delete = models.CASCADE, related_name = "response_to")

class QuestionExerciseRespones(ExerciseResponses):
    response = models.ManyToManyField(Answer, related_name = "response")

# class VideoExerciseRespones(ExerciseResponses):
#     response = models.ManyToManyField(Answer, related_name = "response")

# -------------------- Concrete -------------------- #
class EventResponses(models.Model):
    ExerciseResponses = models.ManyToManyField(ExerciseResponses, related_name = "ExerciseResponse")

class ExperimentResponse(models.Model):
    user_code = models.CharField(max_length = 10, default = "NULL") 
    user_pass = models.CharField(max_length = 10, default = "NULL") 
    EventResponses = models.ManyToManyField(EventResponses, related_name = "EventResponse")

class Event(BaseModel):
    description = models.CharField(max_length=10000, blank=True)  # Description of event
    excercises = models.ManyToManyField(Exercise, related_name= "excercises", blank = True)


    @property
    def event_count(self):
        ''' Method to get num of Es for this event'''
        return self.excercises.count()
    
    def __str__(self):
        return self.title   

class Experiment(BaseModel):
    description = models.CharField(max_length=10000, blank=True)  # Description of experiment
    events = models.ManyToManyField(Event, related_name = "events", blank = True)


    @property
    def event_count(self):
        ''' Method to get num of Es for this experiment'''
        return self.events.count()
    

    def __str__(self):
        return self.title