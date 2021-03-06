from django.shortcuts import render
from django.http import HttpResponse
from django.test import TestCase

# Create your views here.
def index(request):
    return render(request, 'hello/index.html')

def michael(request):
    return HttpResponse('Hello, Michael')

def greet(request, name):
    return render(request, 'hello/greet.html', {
        "name": name.capitalize()
    })