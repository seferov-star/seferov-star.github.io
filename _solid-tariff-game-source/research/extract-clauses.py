from pathlib import Path
import json,re
pages=json.loads(Path('research/pages.json').read_text(encoding='utf-8')); text='\n'.join(pages)
parts=re.split(r'(?m)^\s*(\d+\.\d+(?:\.\d+){0,2})\.\s+',text)
c={parts[i]:re.sub(r'\s+',' ',parts[i+1]).strip() for i in range(1,len(parts)-1,2)}
Path('research/clauses.json').write_text(json.dumps(c,ensure_ascii=False,indent=2),encoding='utf-8')
for k,v in c.items():
 if k.startswith(('9.','10.','11.','12.','13.','14.','15.')): print(k,v[:600])
