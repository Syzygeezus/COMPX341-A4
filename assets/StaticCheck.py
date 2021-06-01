from pathlib import Path
import sys
for path in Path('src').rglob('*.ts'):
    with path.open() as f:
        line = f.readline()
        if line != '// Name: Ryan Monaghan  ID: 1514614':
            print('0')
            sys.exit(0)
print('1')
sys.exit(0)