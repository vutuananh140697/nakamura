from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db=SQLAlchemy()
ma=Marshmallow()

class Admin(db.Model):
    __tablename__ = "admin"
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(50))
    password = db.Column(db.String(255))
 
    def __init__(self,username,password):
        self.username=username
        self.password=password

class AdminSchema(ma.Schema):
    class Meta:
        fields = ('id','username','password')

admin_schema = AdminSchema()
admins_schema = AdminSchema(many=True)

#-----------------------------------------------------Subscribers
class Subscribers(db.Model):
    __tablename__ = "subscribers"
    id = db.Column(db.Integer,primary_key=True)
    email = db.Column(db.String(50))
    date = db.Column(db.Date,default=func.now())
 
    def __init__(self,email):
        self.email=email

class SubscriberSchema(ma.Schema):
    class Meta:
        fields = ('id','email','date')

subscriber_schema = SubscriberSchema()
subscribers_schema = SubscriberSchema(many=True)

#-----------------------------------------------------Posts
class Posts(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String)
    cover = db.Column(db.String)
    description = db.Column(db.String)
    content = db.Column(db.String)
    date = db.Column(db.Date,default=func.now())
    
    def __init__(self,title,cover,description,content):
        self.title=title
        self.cover=cover
        self.description=description 
        self.content=content

class PostSchema(ma.Schema):
    class Meta:
        fields = ('id','title','cover','description','content','date')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

#-----------------------------------------------------Reviews
class Reviews(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.Integer,primary_key=True)
    category = db.Column(db.String)
    cover = db.Column(db.String)
    name = db.Column(db.String)
    description = db.Column(db.String)
    message = db.Column(db.String)
    
    def __init__(self,category,cover,name,description,message):
        self.category=category
        self.cover=cover
        self.name=name 
        self.description=description 
        self.message=message

class ReviewSchema(ma.Schema):
    class Meta:
        fields = ('id','category','cover','name','description','message')

review_schema = ReviewSchema()
reviews_schema = ReviewSchema(many=True)

#-----------------------------------------------------Letters
class Letters(db.Model):
    __tablename__ = "letters"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(50))
    phone = db.Column(db.String(15))
    title = db.Column(db.String)
    message = db.Column(db.String)
    date = db.Column(db.Date,default=func.now())
 
    def __init__(self,name,email,phone,title,message):
        self.name=name
        self.email=email
        self.phone=phone
        self.title=title
        self.message=message

class LetterSchema(ma.Schema):
    class Meta:
        fields = ('id','name','email','phone','title','message','date')

letter_schema = LetterSchema()
letters_schema = LetterSchema(many=True)