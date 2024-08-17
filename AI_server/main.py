from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def get_ai_data():
    return {"message": "This is the AI data you requested."}
