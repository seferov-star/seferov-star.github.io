import sys,json
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
r=ET.fromstring(ZipFile(sys.argv[1]).read('word/document.xml'))
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
rows=[''.join(t.text or '' for t in p.findall('.//w:t',ns)) for p in r.findall('.//w:body//w:p',ns)]
Path('research/phone-source.json').write_text(json.dumps([s for s in rows if s.strip()],ensure_ascii=False,indent=2),encoding='utf-8')
