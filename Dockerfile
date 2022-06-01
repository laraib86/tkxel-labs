FROM python:3.6-alpine

Maintainer M.Sannan

RUN pip install flask

COPY app.py /

EXPOSE 8081

CMD [ "python", "./app.py" ]