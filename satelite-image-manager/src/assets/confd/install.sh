#!/bin/bash
set -e

echo "Install confd"

mkdir -p /opt/confd/bin
wget https://github.com/kelseyhightower/confd/releases/download/v0.15.0/confd-0.15.0-linux-amd64
mv -f confd-0.15.0-linux-amd64 /opt/confd/bin/confd
chmod +x /opt/confd/bin/confd


