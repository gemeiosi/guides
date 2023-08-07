from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Guide
from .serializers import GuideSerializer
# Create your views here.



class GuideView(APIView):

    def post(self, request):
        data = request.data
        serializer = GuideSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Guide Added Successfully",          safe=False)
        return JsonResponse("Failed to Add Guide", safe=False)