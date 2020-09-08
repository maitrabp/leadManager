from rest_framework import viewsets, permissions
from leads.models import Lead
from .serializers import LeadSerializer

# Lead Viewset


class LeadViewset (viewsets.ModelViewSet):
    serializer_class = LeadSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    # only wanna return leads of an authenticated user

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)
