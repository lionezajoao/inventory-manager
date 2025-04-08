from fastapi import FastAPI

from fastapi.staticfiles import StaticFiles
from app.src.router.base import router as base_router

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/public/static"), name="static")
app.mount("/templates", StaticFiles(directory="app/public/templates"), name="templates")

app.include_router(base_router, tags=["base"])
