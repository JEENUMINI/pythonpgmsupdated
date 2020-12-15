lst = []
dt={}
test_count=int(input("Enter the number of test"))
for j in range(0,test_count):
    tweet_no= int(input("Enter the list size"))
    for i in range(0,tweet_no):
        print("Enter value at location",i,":")
        item = input()
        lst.append(item)

    for object in lst:
        objects=object.split(" ")
        name=objects[0]
        if(name not in dt):
            dt[name]=1
        else:
            dt[name]+=1
    value=[]

    for k,v in dt.items():
        value.append(v)
    maxi=max(value)
    for k, v in dt.items():
        if(maxi==v):
            print(k,maxi)










