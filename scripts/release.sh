SCRIPT="cd dashboard; git pull; sudo rm -r build; yarn && yarn build;"
# Note: blog needs to be set in `~/.ssh/config`
ssh blog "${SCRIPT}"
