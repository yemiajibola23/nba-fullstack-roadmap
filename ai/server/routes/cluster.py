from fastapi import APIRouter
from server.models.player import ClusterRequest

router = APIRouter()

@router.post("/cluster")
def cluster_players(data: ClusterRequest):
   return { "received": len(data.players), "status": "ok"}