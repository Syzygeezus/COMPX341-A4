from pathlib import Path
import sys

header = '// Name: Ryan Monaghan  ID: 1514614'

for path in Path('src').rglob('*.ts'):
    with open(path) as f:
        if header not in f.read():
            print('0')
            sys.exit(0)
print('1')
sys.exit(0)