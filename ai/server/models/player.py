from pydantic import BaseModel
from typing import List

class Player(BaseModel):
    name: str
    points: float
    rebounds: float
    assists: float
    steals: float
    blocks: float
    turnovers: float
    field_goal_pct: float
    three_point_pct: float
    minutes_played: float

class ClusterRequest(BaseModel):
    players: List[Player]
