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

    def get_guide(self, pk):
        try:
            guide = Guide.objects.get(guideId=pk)
            return guide
        except Guide.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_guide(pk)
            serializer = GuideSerializer(data)
        else:
            data = Guide.objects.all()
            serializer = GuideSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        guide_to_update = Guide.objects.get(guideId=pk)
        serializer = GuideSerializer(instance=guide_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Guide updated Successfully", safe=False)
        return JsonResponse("Failed To Update Guide")

    def delete(self, request, pk):
        guide_to_delete = Guide.objects.get(guideId=pk)
        guide_to_delete.delete()
        return JsonResponse("Guide Deleted Successfully", safe=False)