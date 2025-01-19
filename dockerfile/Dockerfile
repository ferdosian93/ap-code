FROM harbor.tasn.ir/library/debian:12

# Final Image: harbor.tasn.ir/library/docker-base-images/debian-instantclient:12

#COPY debian-stable-pack/sources.list /etc/apt/sources.list
RUN apt update && apt install -y ca-certificates libaio1 tzdata curl wget netcat-openbsd unzip
COPY cert/*.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates --fresh


WORKDIR /opt/oracle
# download an unzip oralce instant client-base c library
RUN wget https://download.oracle.com/otn_software/linux/instantclient/218000/instantclient-basic-linux.x64-21.8.0.0.0dbru.zip && \
    unzip  -o ./instantclient-basic-linux.x64-21.8.0.0.0dbru.zip -d /opt/oracle && \
    rm -f instantclient-basic-linux.x64-21.8.0.0.0dbru.zip
 
RUN sh -c "echo /opt/oracle > /etc/ld.so.conf.d/oracle-instantclient.conf" && \
    ldconfig
ENV LD_LIBRARY_PATH /opt/oracle/instantclient_21_8

