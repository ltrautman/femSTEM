from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

def home(request):
    return render(request, 'index.html', {})

def aboutus(request):
    return render(request, 'aboutus.html', {})

def dashboard(request):
    return render(request, 'dashboard.html', {})

def faq(request):
    return render(request, 'faq.html', {})

def login(request):
    return render(request, 'login.html', {})

def logout(request):
    return render(request, 'logout.html', {})

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {})

def scheduler(request):
    return render(request, 'scheduler.html', {})

def timeline(request):
    return render(request, 'timeline.html', {})
