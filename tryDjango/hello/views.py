from django.shortcuts import render
from django.http import HttpResponse
from django.test import TestCase

# Create your views here.
def index(request):
    return HttpResponse('Hello, world!')