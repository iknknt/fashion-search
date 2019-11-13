FROM python:3.7-alpine


WORKDIR /app
COPY  . /app

RUN pip install flask


EXPOSE 5000

ENTRYPOINT ["python"]
CMD ["app.py"]