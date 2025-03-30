from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include
from django.shortcuts import render
# Serve the frontend index.html
def frontend_view(request):
    return render(request, "index.html")

urlpatterns = [
    # Admin interface
    path('admin/', admin.site.urls),

    # API routes
    path('api/', include('onlinecard.urls')),

    # Frontend
    path('', frontend_view, name='frontend'),  # Serve index.html for the root
    path('<path:any>', TemplateView.as_view(template_name="index.html")),
]