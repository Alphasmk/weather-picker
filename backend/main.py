from fastapi import FastAPI
from backend.http_client import WTHHTTpClient
from backend.init import wth_client
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/weather/{city}")
async def get_weather_in_city(city: str):
    return await wth_client.get_weather(city)