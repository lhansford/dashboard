SCRIPT="cd dashboard; git pull; rm -rf build; yarn; yarn build;"
# Note: blog needs to be set in `~/.ssh/config`
ssh blog "${SCRIPT}"
