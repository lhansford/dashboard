SCRIPT="cd dashboard; git pull; yarn && yarn build;"
# Note: blog needs to be set in `~/.ssh/config`
ssh blog "${SCRIPT}"
