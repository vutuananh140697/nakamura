from flask import (
    Blueprint, request, jsonify
)
from model import Reviews, review_schema, reviews_schema, db
from file import remove_file

review = Blueprint('review', __name__)

@review.route('/listreviews',methods =['GET'])
def listreviews():
    all_reviews = Reviews.query.all()
    results = reviews_schema.dump(all_reviews)
    return jsonify(results)

@review.route('/reviewdetails/<id>',methods =['GET'])
def reviewdetails(id):
    review = Reviews.query.get(id)
    return review_schema.jsonify(review)

@review.route('/reviewupdate/<id>',methods = ['PUT'])
def reviewupdate(id):
    review = Reviews.query.get(id)

    category = request.json['category']
    cover = request.json['cover']
    name = request.json['name']
    description = request.json['description']
    message = request.json['message']

    review.category = category
    review.cover = cover
    review.name = name
    review.description = description
    review.message = message

    db.session.commit()
    return review_schema.jsonify(review)
    
@review.route('/reviewdelete/<id>',methods=['DELETE'])
def reviewdelete(id):
    review = Reviews.query.get(id)
    remove_file(review.cover)
    db.session.delete(review)
    db.session.commit()
    return review_schema.jsonify(review)

@review.route('/reviewadd',methods=['POST'])
def reviewadd():
    category = request.json['category']
    cover = request.json['cover'] if 'cover' in request.json else None
    name = request.json['name']
    description = request.json['description']
    message = request.json['message']

    reviews = Reviews(category,cover,name,description,message)
    db.session.add(reviews)
    db.session.commit()

    return review_schema.jsonify(reviews)