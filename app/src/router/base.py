import os

from fastapi import APIRouter, Request, Response
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory=os.path.join(os.getcwd(), "app/public/templates"))

router = APIRouter()

@router.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@router.get("/inventory", response_class=HTMLResponse)
async def read_inventory(request: Request):
    return templates.TemplateResponse("inventory.html", {"request": request})