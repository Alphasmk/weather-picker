from backend.config import settings
from backend.http_client import WTHHTTpClient


wth_client = WTHHTTpClient(
    base_url="http://api.weatherapi.com",
    api_key=settings.WEATHER_API_KEY
)