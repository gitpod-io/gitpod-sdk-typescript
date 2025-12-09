FROM mcr.microsoft.com/devcontainers/typescript-node:latest

# Disable npm/yarn lifecycle scripts for security
RUN npm config set ignore-scripts true --location=user && \
    echo 'ignore-scripts true' >> ~/.yarnrc

# Disable npx for security
RUN NPX_PATH=$(which npx) && \
    rm -f "$NPX_PATH" && \
    echo '#!/bin/sh' > "$NPX_PATH" && \
    echo 'echo "npx is disabled for security reasons. Use explicit package installation instead." >&2' >> "$NPX_PATH" && \
    echo 'exit 1' >> "$NPX_PATH" && \
    chmod +x "$NPX_PATH"
