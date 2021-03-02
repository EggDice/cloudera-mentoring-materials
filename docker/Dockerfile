FROM ubuntu

RUN apt-get update && \
      apt-get install -y python3 sl && \
      ln -s /usr/games/sl /usr/local/bin

COPY . /opt

CMD python3 /opt/listfruits.py
