from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer
from .models import *

# -------------------- Abstract -------------------- #

class BaseModelSerializer(serializers.ModelSerializer):
	class Meta:
		model = BaseModel
		fields = ["title",  "created_at", "updated_at", "created_by"]
		abstract = True

# -------------------- Polymorphic Serializers -------------------- #

class ExerciseSerializer(BaseModelSerializer):

    class Meta:
        model = Exercise
        fields = ["instruction",]

class AnswerSerializer(serializers.ModelSerializer):

	class Meta:
		model = Answer
		fields = ['answer_to']

# -------------------- Polymorphic Serializer : Answer -------------------- #
class MCAnswerSerializer(serializers.ModelSerializer):

		class Meta:
			model = Answer
			fields = ['answer_to', 'MCA']

class CBAnswerSerializer(serializers.ModelSerializer):

		class Meta:
			model = CBAnswer
			fields = ['answer_to', 'CBAs']

class SAAnswerSerializer(serializers.ModelSerializer):

		class Meta:
			model = SAnswer
			fields = ['answer_to', 'SA']

class LAAnswerSerializer(serializers.ModelSerializer):

		class Meta:
			model = LAnswer
			fields = ['answer_to', 'LA']

class SLAAnswerSerializer(serializers.ModelSerializer):

		class Meta:
			model = Answer
			fields = ['answer_to', 'SLA']

# -------------------- Polymorphic Serializer : Questions -------------------- #

class ChoicesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Choices
		fields = ["choice"," choice_to"]
	
class QuestionSerializer(serializers.ModelSerializer):
	choices = ChoicesSerializer(read_only = True, many = True)
	
	class Meta:
		model = Questions
		fields = ["questionType","question","required"]

class QuestionExerciseSerializer(serializers.ModelSerializer):
	questions = QuestionSerializer(read_only = True, many = True)

	class Meta:
		model = QuestionExercise
		fields = ["questions"]

# -------------------- Polymorphic Serializer : Mapping -------------------- #

class ExercisePolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Exercise: ExerciseSerializer,
        QuestionExercise: QuestionExerciseSerializer
    }


class AnswerPolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Answer: AnswerSerializer,
        MCAnswer: MCAnswerSerializer,
		CBAnswer: CBAnswerSerializer,
		SAnswer: SAAnswerSerializer,
		LAnswer: LAAnswerSerializer}

# -------------------- Concrete Serializer -------------------- #

class EventSerializer(serializers.ModelSerializer):
	exercise = serializers.SerializerMethodField()
	class Meta:
		model = Event
		fields =  ["description", "exercise"]

	def get_exercise(self, obj):
		exercise = Exercise.objects.filter(excercises__id = obj.id)
		serializer = ExercisePolymorphicSerializer(exercise, many= True)
		return serializer.data

class ExperimentSerializer(serializers.ModelSerializer):
	event = serializers.SerializerMethodField()
	class Meta:
		model = Experiment
		fields =  ["title","created_at", "updated_at","description", "event"]

	def get_event(self, obj):
		event = Event.objects.filter(events__id = obj.id)
		serializer = EventSerializer(event, many= True)
		return serializer.data
