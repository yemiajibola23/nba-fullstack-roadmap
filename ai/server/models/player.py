from pydantic import BaseModel
from typing import List

class Player(BaseModel):
    name: str
    points: float
    rebounds: float
    assists: float

class ClusterRequest(BaseModel):
    players: List[Player]
