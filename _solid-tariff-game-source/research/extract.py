from pathlib import Path
import fitz,re,json
d=fitz.open('research/regulations.pdf'); data=[]
for i,p in enumerate(d):
 s=p.get_text(sort=True); s=re.sub(r'[ \t]+',' ',s)
 data.append(s)
Path('research/pages.json').write_text(json.dumps(data,ensure_ascii=False),encoding='utf-8')
alltext='\n'.join(data)
parts=re.split(r'(?m)^\s*(\d+\.\d+\.\d+(?:\.\d+)?\.)\s+',alltext)
clauses={parts[i].rstrip('.'):re.sub(r'\s+',' ',parts[i+1]).strip() for i in range(1,len(parts)-1,2)}
Path('research/clauses.json').write_text(json.dumps(clauses,ensure_ascii=False,indent=2),encoding='utf-8')
for k,v in clauses.items():
 if k.startswith(('1.2.','2.1.')):print(k,v[:1000])
