from fastapi import FastAPI
from server.routes import cluster
app = FastAPI()

app.include_router(cluster.router)

@app.get("/healthcheck")
def healthcheck():
    return {"status": "ok"}
