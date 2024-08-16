# Start from an official Python image.
FROM python:3.9-slim

# Set the working directory in the container.
WORKDIR /app

# Copy the requirements file into the container.
COPY ./requirements.txt /app/requirements.txt

# Install the dependencies.
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

# Copy the FastAPI application code into the container.
COPY ./main.py /app/main.py

# Expose port 8000 to the outside world.
EXPOSE 8000

# Run the FastAPI application with Uvicorn server.
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
