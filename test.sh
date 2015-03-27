read n
k=n
# store single digit
sd=0
 
# store number of digit 
sum=0
 
# use while loop to caclulate the sum of all digits
while [ $n -gt 0 ]
do
    read v
    sum=$(( $sum + $v )) # calculate sum of digit
done
echo "scale=3; $sum/12" | bc
