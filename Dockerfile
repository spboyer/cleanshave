# These commands are likely to never change (low volatility).
FROM microsoft/aspnet:1.0.0-beta8-coreclr
WORKDIR /app

# These commands should rarely change (low volatility).
# A new environment variable default could potentially be added, but the port and command defaults shouldn't change.
EXPOSE 5000/tcp
ENTRYPOINT ["dnx", "-p", "project.json", "web"]

# These commands will periodically detect changes (medium volatility).
# The COPY command will detect when the project.json changes from version or package updates,
# cache-busting the layers below and re-running the `dnu restore`.
COPY . /app
RUN ["dnu", "restore"]