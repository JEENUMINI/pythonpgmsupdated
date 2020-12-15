# sample i/p=2 o/p=24(2+22)
# sample i/p=3 o/p=369(3+33+333)
# sample i/p=4 o/p=4936(4+44+444+4444)
number = int(input("enter value for num"))
sum_ = 0
for i in range(1, number+1):
    sum_ += int(str(number) * i)
print(sum_)