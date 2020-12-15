num=int(input("enter num"))
first_value=0
second_value=1
for i in range(0,num+1):
    if(i<=1):
        next=i
    else:
        next=first_value+second_value
        first_value=second_value
        second_value=next
    print(next)
#
# limit=int(input("enter limit"))
# prev=0
# next=0
# res=0
# for i in range(0,(limit+1)):
#     if(i<=1):
#         res=i
#     else:
#         prev = next
#         next = res
#         res=prev+next
#
#     print(res)