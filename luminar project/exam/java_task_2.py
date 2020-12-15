# var n=2
# var minimum=45
# var maximum=65
lst=[]
num=int(input("enter num"))
mini=45
maxi=65
res=0

op=[]
dt={}
for i in range(1,maxi):
    res=i**num
    lst.append(res)
    for item in lst:
        if(item>=mini):
            if(item<=maxi):
                op.append(item)
for obj in op:
    if(obj not in dt):
        dt[obj]=1
    else:
        dt[obj]+=1
for k,v in dt.items():
    print(k)











