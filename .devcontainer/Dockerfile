FROM node:22-bookworm

# Change node user's group id
RUN groupmod -g 1001 node \
  && usermod -u 1001 -g 1001 node

ARG USER=vscode
ARG UID=1000

RUN apt -y update  && apt -y upgrade

RUN groupadd --gid ${UID} ${USER} \
    && useradd -m --uid ${UID} --gid ${UID} \
    --shell /bin/bash ${USER}

USER $USER

CMD [ "npm" "init" ]
